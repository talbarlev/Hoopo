import { RoomFeature, RoomType } from "./enums";

export type Room = {
    roomid: number;
    roomName: string;
    type: RoomType;
    accessible: boolean;
    image: string;
    description: string;
    features: RoomFeature[];
    roomPrice: number;
};

export type RoomsResponse = {
    rooms: Room[];
};