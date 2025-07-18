import { BaseApi } from '../base-client';
import { RoomsResponse } from './response-type';

export class RoomApiClient extends BaseApi {

    constructor() {
        super("/room");
    }

    public async getAllRooms(): Promise<{ status: number, body: RoomsResponse }> {
        return this.get('');
    }

    public async getRoomById(id : string): Promise<{ status: number, body: RoomsResponse }> {
        return this.get(id);
    }
}