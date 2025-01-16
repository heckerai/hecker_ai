import { makeAutoObservable } from "mobx";
import { getLocalAccessToken, setLocalAccessToken } from "../Helpers/LocalStorage";
import { WidthEnum } from "../Helpers/Enums";

export class RootStore {
    private _windowWidth!: WidthEnum;
    private _accessToken: string | null;
    private _globalLoading: boolean;
    private _validationCode: string;
    private _validationResult: string | null;
    private _generationMessages: string[];
    private _generationResult: string | null;

    constructor() {
        this._accessToken = getLocalAccessToken();
        this.resizeHandler();
        window.addEventListener("resize", this.resizeHandler);
        this._globalLoading = false;
        this._validationCode = "";
        this._validationResult = null;
        this._generationMessages = [];
        this._generationResult = null;
        makeAutoObservable(this);
    }

    resizeHandler = () => {
        if (window.innerWidth <= 1000) {
            this.setWindowWidth(WidthEnum.MOBILE);
        } else if (window.innerWidth <= 1200) {
            this.setWindowWidth(WidthEnum.TABLET);
        } else {
            this.setWindowWidth(WidthEnum.DESKTOP);
        }
    };
    setWindowWidth = (width: WidthEnum) => {
        this._windowWidth = width;
    };
    get windowWidth() {
        return this._windowWidth;
    }

    setAccessToken = (token: string | null) => {
        this._accessToken = token;
        setLocalAccessToken(token);
    };
    get accessToken(): string | null {
        return this._accessToken;
    }

    setGlobalLoading = (isLoading: boolean) => {
        this._globalLoading = isLoading;
    };
    get globalLoading(): boolean {
        return this._globalLoading;
    }

    setValidationCode = (result: string) => {
        this._validationCode = result;
    };
    get validationCode(): string {
        return this._validationCode;
    }

    setValidationResult = (result: string | null) => {
        this._validationResult = result;
    };
    get validationResult(): string | null {
        return this._validationResult;
    }

    addGenerationMessage = (message: string) => {
        this._generationMessages.push(message);
    };
    clearGenerationMessages = () => {
        this._generationMessages = [];
    };
    removeLastGenerationMessage = () => {
        this._generationMessages = this._generationMessages.slice(0, -1);
    };
    get generationMessages(): string[] {
        return this._generationMessages;
    }

    setGenerationResult = (result: string | null) => {
        this._generationResult = result;
    };
    get generationResult(): string | null {
        return this._generationResult;
    }
}
