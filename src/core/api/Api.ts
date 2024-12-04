/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface User {
  /**
   * Email адрес
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * Пароль
   * @minLength 1
   * @maxLength 50
   */
  password: string;
  /**
   * Is staff
   * @default false
   */
  is_staff?: boolean;
  /**
   * Is superuser
   * @default false
   */
  is_superuser?: boolean;
}

export interface RentOrderr {
  /** ID */
  pk?: number;
  /**
   * Дата создания
   * @format date-time
   */
  order_date: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /** Status */
  status?: "DRAFT" | "DELETED" | "REJECTED" | "COMPLETED" | "FORMED";
  /**
   * Итоговая стоимость
   * @format decimal
   */
  total_amount?: string;
  /**
   * Дата формирования
   * @format date-time
   */
  formation_date?: string | null;
  /**
   * Дата завершения
   * @format date-time
   */
  completion_date?: string | null;
  /**
   * Модератор
   * @minLength 1
   * @maxLength 255
   */
  moderator?: string;
  /**
   * Создатель
   * @min -2147483648
   * @max 2147483647
   */
  client: number;
}

export interface RentServicesForRequested {
  /** ID */
  pk?: number;
  /**
   * Название услуги
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Цена
   * @minLength 1
   * @maxLength 50
   */
  price: string;
  /**
   * Иконка
   * @format uri
   * @minLength 1
   * @maxLength 200
   */
  icon: string;
}

export interface Related {
  /** Заявка */
  order: number;
  service: RentServicesForRequested;
  /** Последние показания/Дата последней оплаты */
  last_reading?: string | null;
  /** Текущие показания/Дата */
  current_reading?: string | null;
}

export interface RentOrderWithInfo {
  /** ID */
  pk?: number;
  /**
   * Дата создания
   * @format date-time
   */
  order_date: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /** Status */
  status?: "DRAFT" | "DELETED" | "REJECTED" | "COMPLETED" | "FORMED";
  /**
   * Итоговая стоимость
   * @format decimal
   */
  total_amount?: string;
  /**
   * Дата формирования
   * @format date-time
   */
  formation_date?: string | null;
  /**
   * Дата завершения
   * @format date-time
   */
  completion_date?: string | null;
  /**
   * Модератор
   * @minLength 1
   * @maxLength 255
   */
  moderator?: string;
  /**
   * Создатель
   * @min -2147483648
   * @max 2147483647
   */
  client: number;
  services: Related[];
}

export interface RentOrderService {
  /** Заявка */
  order: number;
  /** Услуга */
  service: number;
  /** Последние показания/Дата последней оплаты */
  last_reading?: string | null;
  /** Текущие показания/Дата */
  current_reading?: string | null;
}

export interface RentOrder {
  /** ID */
  pk?: number;
  /**
   * Дата создания
   * @format date-time
   */
  order_date: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /** Status */
  status?: "DRAFT" | "DELETED" | "REJECTED" | "COMPLETED" | "FORMED";
  /**
   * Итоговая стоимость
   * @format decimal
   */
  total_amount?: string;
  /**
   * Дата формирования
   * @format date-time
   */
  formation_date?: string | null;
  /**
   * Дата завершения
   * @format date-time
   */
  completion_date?: string | null;
  /**
   * Модератор
   * @minLength 1
   * @maxLength 255
   */
  moderator?: string;
  /**
   * Создатель
   * @min -2147483648
   * @max 2147483647
   */
  client: number;
  services?: RentOrderService[];
}

export interface RentService {
  /** ID */
  pk?: number;
  /**
   * Название услуги
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Цена
   * @minLength 1
   * @maxLength 50
   */
  price: string;
  /**
   * Описание
   * @minLength 1
   */
  description: string;
  /**
   * Иконка
   * @format uri
   * @minLength 1
   * @maxLength 200
   */
  icon: string;
  /**
   * Дополнительная иконка
   * @format uri
   * @minLength 1
   * @maxLength 200
   */
  icon1: string;
  /**
   * Статус услуги
   * @minLength 1
   * @maxLength 20
   */
  status?: string;
}

export interface GetCargo {
  ServiceList: RentService[];
  /** Orderid */
  OrderId?: number | null;
  /** Items in cart */
  items_in_cart: number;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://localhost:8000" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Snippets API
 * @version v1
 * @license BSD License
 * @termsOfService https://www.google.com/policies/terms/
 * @baseUrl http://localhost:8000
 * @contact <contact@snippets.local>
 *
 * Test description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  createUser = {
    /**
     * No description
     *
     * @tags create_user
     * @name CreateUserCreate
     * @request POST:/create_user/
     * @secure
     */
    createUserCreate: (data: User, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/create_user/`,
        method: "POST",
        body: data,
        secure: true,
        ...params,
      }),
  };
  login = {
    /**
     * No description
     *
     * @tags login
     * @name LoginCreate
     * @request POST:/login
     * @secure
     */
    loginCreate: (
      data: {
        /**
         * @format email
         * @minLength 1
         * @maxLength 254
         */
        email: string;
        /**
         * @minLength 1
         * @maxLength 50
         */
        password: string;
        /** @default false */
        is_staff?: boolean;
        /** @default false */
        is_superuser?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<User, any>({
        path: `/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),
  };
  logout = {
    /**
     * No description
     *
     * @tags logout
     * @name LogoutCreate
     * @request POST:/logout
     * @secure
     */
    logoutCreate: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/logout`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  rentOrders = {
    /**
     * No description
     *
     * @tags rent_orders
     * @name RentOrdersList
     * @request GET:/rent_orders/
     * @secure
     */
    rentOrdersList: (
      query?: {
        /** status */
        status?: string;
        /**
         * status
         * @format date-time
         */
        formation_start?: string;
        /**
         * status
         * @format date-time
         */
        formation_end?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RentOrderr[], void>({
        path: `/rent_orders/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description получить отправление
     *
     * @tags rent_orders
     * @name RentOrdersRead
     * @request GET:/rent_orders/{id}/
     * @secure
     */
    rentOrdersRead: (id: string, params: RequestParams = {}) =>
      this.request<RentOrderWithInfo, void>({
        path: `/rent_orders/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description удалить оформление
     *
     * @tags rent_orders
     * @name RentOrdersDelDelete
     * @request DELETE:/rent_orders/{id}/del
     * @secure
     */
    rentOrdersDelDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/rent_orders/${id}/del`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description изменить отправление
     *
     * @tags rent_orders
     * @name RentOrdersEditUpdate
     * @request PUT:/rent_orders/{id}/edit/
     * @secure
     */
    rentOrdersEditUpdate: (id: string, data: RentOrder, params: RequestParams = {}) =>
      this.request<RentOrder, void>({
        path: `/rent_orders/${id}/edit/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags rent_orders
     * @name RentOrdersFinalizeUpdate
     * @request PUT:/rent_orders/{id}/finalize/
     * @secure
     */
    rentOrdersFinalizeUpdate: (id: string, params: RequestParams = {}) =>
      this.request<RentOrder, void>({
        path: `/rent_orders/${id}/finalize/`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags rent_orders
     * @name RentOrdersRejectUpdate
     * @request PUT:/rent_orders/{id}/reject/
     * @secure
     */
    rentOrdersRejectUpdate: (id: string, params: RequestParams = {}) =>
      this.request<RentOrder, void>({
        path: `/rent_orders/${id}/reject/`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаление груза из отправления
     *
     * @tags rent_orders
     * @name RentOrdersServicesDeleteDelete
     * @request DELETE:/rent_orders/{ok}/services/{sk}/delete/
     * @secure
     */
    rentOrdersServicesDeleteDelete: (ok: string, sk: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/rent_orders/${ok}/services/${sk}/delete/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Изменение данных о грузе в отправлении
     *
     * @tags rent_orders
     * @name RentOrdersServicesUpdateReadingUpdate
     * @request PUT:/rent_orders/{ok}/services/{sk}/update_reading/
     * @secure
     */
    rentOrdersServicesUpdateReadingUpdate: (
      ok: string,
      sk: string,
      data: RentOrderService,
      params: RequestParams = {},
    ) =>
      this.request<RentOrderService, void>({
        path: `/rent_orders/${ok}/services/${sk}/update_reading/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  rentServices = {
    /**
     * @description получение списка услуг
     *
     * @tags rent_services
     * @name RentServicesList
     * @request GET:/rent_services/
     * @secure
     */
    rentServicesList: (
      query?: {
        /** Название услуги для поиска */
        title?: string;
        /** Минимальная цена */
        min_price?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetCargo, void>({
        path: `/rent_services/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description добавить новую услугу
     *
     * @tags rent_services
     * @name RentServicesAddCreate
     * @request POST:/rent_services/add/
     * @secure
     */
    rentServicesAddCreate: (data: RentService, params: RequestParams = {}) =>
      this.request<RentService, void>({
        path: `/rent_services/add/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description получение услуги
     *
     * @tags rent_services
     * @name RentServicesRead
     * @request GET:/rent_services/{id}/
     * @secure
     */
    rentServicesRead: (id: string, params: RequestParams = {}) =>
      this.request<RentService, void>({
        path: `/rent_services/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description загрузить картинку в минио
     *
     * @tags rent_services
     * @name RentServicesAddImageCreate
     * @request POST:/rent_services/{id}/add_image/
     * @secure
     */
    rentServicesAddImageCreate: (
      id: string,
      data: {
        /**
         * Image
         * @format binary
         */
        image: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/rent_services/${id}/add_image/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description создать новое отправление или добавить туда груз
     *
     * @tags rent_services
     * @name RentServicesAddToDraftCreate
     * @request POST:/rent_services/{id}/add_to_draft/
     * @secure
     */
    rentServicesAddToDraftCreate: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/rent_services/${id}/add_to_draft/`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description удалить услугу
     *
     * @tags rent_services
     * @name RentServicesDeleteDelete
     * @request DELETE:/rent_services/{id}/delete/
     * @secure
     */
    rentServicesDeleteDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/rent_services/${id}/delete/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description изменить услугу
     *
     * @tags rent_services
     * @name RentServicesEditUpdate
     * @request PUT:/rent_services/{id}/edit/
     * @secure
     */
    rentServicesEditUpdate: (id: string, data: RentService, params: RequestParams = {}) =>
      this.request<RentService, void>({
        path: `/rent_services/${id}/edit/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  updatePassword = {
    /**
     * No description
     *
     * @tags update_password
     * @name UpdatePasswordUpdate
     * @request PUT:/update_password
     * @secure
     */
    updatePasswordUpdate: (data: User, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/update_password`,
        method: "PUT",
        body: data,
        secure: true,
        ...params,
      }),
  };
}
