import { request, APIRequestContext, APIResponse } from '@playwright/test';


export abstract class BaseApi {
    protected baseURL = 'https://automationintesting.online/api';
    protected context: APIRequestContext | undefined

    constructor(endpoint: string) {
        this.setUrl(endpoint);
    }

    protected async getContext(): Promise<APIRequestContext> {
        if (!this.context) {
            this.context = await request.newContext({ baseURL: this.baseURL });
        }
        return this.context;
    }

    protected async get(path: string): Promise<{ status: number, body: any }> {
        const ctx = await this.getContext();

        const fullUrl = this.baseURL + path;
        console.log(`📤 [GET] Request to: ${fullUrl}`);

        const response = await ctx.get(path);

        const body = await this.safeJson(response);
        console.log(`📥[GET] Response : status(${response.status()})
        , body : ${JSON.stringify(body)}`);

        return { status: response.status(), body };
    }

    protected async post(path: string, data: any): Promise<{ status: number, body: any }> {
        const ctx = await this.getContext();
        const response = await ctx.get(path, { data });
        const body = await response.json();
        return { status: response.status(), body };
    }

    private setUrl(endpoint: string): void {
        this.baseURL = this.baseURL.concat(endpoint);
    }

    private async safeJson(response: APIResponse): Promise<any> {
        try {
            return await response.json();
        } catch (e) {
            console.warn('⚠️ Failed to parse JSON response');
            return null;
        }
    }

}