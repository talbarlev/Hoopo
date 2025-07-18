import { test, expect } from "@playwright/test";
import { RoomApiClient } from "../../apis/room/room-client";
import { isEnumValue } from "../../common-commands";
import { RoomFeature, RoomType } from "../../apis/room/enums";

test.describe("API", () => {
    test("[GET] - Rooms successful Request", async () => {
        const roomApi = new RoomApiClient();

        const response = await roomApi.getAllRooms();

        expect(response.status, "Status code").toBe(200);
        expect(response.body.rooms.length, "at least one room is available").toBeGreaterThan(0);
    })

    test("[GET] - Rooms successful Request [values validation]", async () => {
        const roomApi = new RoomApiClient();

        const response = await roomApi.getAllRooms();

        const firstRoomInList = response.body.rooms[0];

        expect(response.status, "Status code").toBe(200);
        expect(firstRoomInList.roomid, "id").toBeGreaterThan(0);
        expect(firstRoomInList.roomPrice, "price").toBeGreaterThan(0);
        expect(firstRoomInList.features.length, "features").toBeGreaterThan(0);
        firstRoomInList.features.forEach((feature) => {
            expect(isEnumValue(RoomFeature, feature), `feature '${feature}'`).toBe(true);
        })
        expect(isEnumValue(RoomType, firstRoomInList.type), `room '${firstRoomInList.type}' type is valid from enum list`).toBe(true);
        expect(firstRoomInList.roomName.trim().length, "name is not empty").toBeGreaterThan(0);
        expect(firstRoomInList.description.trim().length, "description is not empty").toBeGreaterThan(0);
        expect(firstRoomInList.image.trim().length, "image is not empty").toBeGreaterThan(0);
    })

    test("[GET] [negative] Room successful Request by id [not exist id]", async () => {
        const nonExistId = "45738450344";

        const roomApi = new RoomApiClient();

        const response = await roomApi.getRoomById(nonExistId);

        expect(response.status, "Status code").toBe(404);
    })
})