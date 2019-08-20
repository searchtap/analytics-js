import { AxiosInstance } from "axios";
import { IUserIdResponse } from "./domain/IUserIdResponse";
import { IAnalyticsData } from "./domain/IAnalyticsData";
import { ISearchResponse } from "./domain/ISearchResponse";
declare const _default: {
    new (collectionUniqueId: string, searchToken: string): {
        localUserId: string;
        trackingRestClient: AxiosInstance;
        localUserCookieKey: string;
        globalEventProperties: {
            [prop: string]: any;
        };
        cachedEvents: IAnalyticsData[];
        canSendEvents: boolean;
        collectionUniqueId: string;
        searchToken: string;
        waitForLoad(): void;
        /***
         * request new user id from server
         */
        generateUserId(): Promise<IUserIdResponse>;
        setUser(userId: string): any;
        /***
         * get local user id if exists else create new
         */
        getUserId(): Promise<void>;
        /***
         * save local user id cookie to browser
         * @param userId
         */
        saveLocalUserIdCookieToBrowser(userId: string): void;
        /***
         * assign global properties to be send in each event request
         * @param properties
         */
        setGlobalProps(properties: {
            [prop: string]: any;
        }): void;
        /***
         * send event to server
         * @param eventName
         * @param eventData
         */
        sendEvent(eventName: string, eventData: {
            [prop: string]: any;
        }): Promise<void>;
        sendEventToServer(): Promise<void>;
        searchQuery(searchResponse: ISearchResponse, label: string): Promise<void>;
        emptySearchResults(searchResponse: ISearchResponse): Promise<void>;
    };
};
export = _default;
