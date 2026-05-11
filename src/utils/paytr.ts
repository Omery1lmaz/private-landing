import crypto from 'crypto';

export interface PayTRInitParams {
  userIp: string;
  merchantOid: string;
  email: string;
  paymentAmount: number; // in TL (will be multiplied by 100 for PayTR)
  userBasket: [string, string, number][]; // [name, price, quantity]
  userName: string;
  userAddress: string;
  userPhone: string;
  merchantOkUrl: string;
  merchantFailUrl: string;
  currency?: string;
  testMode?: boolean;
}

export class PayTR {
  private merchantId: string;
  private merchantKey: string;
  private merchantSalt: string;

  constructor() {
    this.merchantId = process.env.PAYTR_MERCHANT_ID || '';
    this.merchantKey = process.env.PAYTR_MERCHANT_KEY || '';
    this.merchantSalt = process.env.PAYTR_MERCHANT_SALT || '';
  }

  generateToken(params: PayTRInitParams): string {
    const paymentAmount = Math.round(params.paymentAmount * 100);
    const userBasket = Buffer.from(JSON.stringify(params.userBasket)).toString('base64');
    const noInstallment = '0';
    const maxInstallment = '0';
    const currency = params.currency || 'TL';
    const testMode = params.testMode ? '1' : '0';

    const hashStr = 
      this.merchantId + 
      params.userIp + 
      params.merchantOid + 
      params.email + 
      paymentAmount + 
      userBasket + 
      noInstallment + 
      maxInstallment + 
      currency + 
      testMode + 
      this.merchantSalt;

    return crypto
      .createHmac('sha256', this.merchantKey)
      .update(hashStr)
      .digest('base64');
  }

  async getToken(params: PayTRInitParams): Promise<{ status: string; token?: string; reason?: string }> {
    const paymentAmount = Math.round(params.paymentAmount * 100);
    const userBasket = Buffer.from(JSON.stringify(params.userBasket)).toString('base64');
    const token = this.generateToken(params);

    const formData = new URLSearchParams();
    formData.append('merchant_id', this.merchantId);
    formData.append('user_ip', params.userIp);
    formData.append('merchant_oid', params.merchantOid);
    formData.append('email', params.email);
    formData.append('payment_amount', paymentAmount.toString());
    formData.append('paytr_token', token);
    formData.append('user_basket', userBasket);
    formData.append('debug_on', '1');
    formData.append('no_installment', '0');
    formData.append('max_installment', '0');
    formData.append('user_name', params.userName);
    formData.append('user_address', params.userAddress);
    formData.append('user_phone', params.userPhone);
    formData.append('merchant_ok_url', params.merchantOkUrl);
    formData.append('merchant_fail_url', params.merchantFailUrl);
    formData.append('timeout_limit', '30');
    formData.append('currency', params.currency || 'TL');
    formData.append('test_mode', params.testMode ? '1' : '0');
    formData.append('iframe_theme', 'dark'); // Force dark mode

    const response = await fetch('https://www.paytr.com/odeme/api/get-token', {
      method: 'POST',
      body: formData,
    });

    return await response.json() as any;
  }

  verifyCallback(params: any): boolean {
    const { merchant_oid, total_amount, status, hash } = params;
    const expectedHashStr = merchant_oid + this.merchantSalt + status + total_amount;
    const expectedHash = crypto
      .createHmac('sha256', this.merchantKey)
      .update(expectedHashStr)
      .digest('base64');

    return hash === expectedHash;
  }
}
