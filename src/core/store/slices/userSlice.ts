import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from "../../api";
import { LoginDataProps } from "../../../pages/login/typing";

import { useNavigate } from "react-router-dom";
import { refreshApp } from "./appSlice";
import { useDispatch, UseDispatch } from "react-redux";
import { UserAccountData } from "../../../pages/user_settings/typing";

import axios, {AxiosError} from 'axios';

export const logoutUser = createAsyncThunk(
    'order/getById',
    async (Order_ID : string , { rejectWithValue }) => {
      try {
        const response = await api.rentOrders.rentOrdersDelDelete(Order_ID)
        
        // Проверяем статус ответа
        if (response.status === 200 || response.status === 201) {
            api.logout.logoutCreate()
            // navigate('/cargo_catalog')
          // Если запрос успешен, но данных нет, возвращаем имя пользователя из запроса
          return 'Успешно удалено'
        }
        
        return rejectWithValue('Неизвестная ошибка')
      } catch (err) {
        const error = err as AxiosError
        
        if (error.response?.status === 400) {
          return rejectWithValue('Неверные данные для входа')
        }
        if (error.response?.status === 401) {
          return rejectWithValue('Неавторизованный доступ')
        }
        if (error.response?.status === 404) {
            api.logout.logoutCreate()
            // navigate('/cargo_catalog')
            
        //   return rejectWithValue('Пользователь не найден')
        }
        if (!error.response) {
          return rejectWithValue('Ошибка сети. Проверьте подключение')
        }
        
        return rejectWithValue('Сервер временно недоступен')
      }
    }
    )
      
export const loginUser = createAsyncThunk<
    string,
    LoginDataProps,
    {
    rejectValue: string
    }
>(
    'user/login',
    async (loginData: LoginDataProps, { rejectWithValue }) => {
    try {
        const response = await api.login.loginCreate(loginData)
        
        // Проверяем статус ответа
        if (response.status === 201) {
            // alert('Вы авторизованы! На главную...')
        // Если запрос успешен, возвращаем имя пользователя из запроса
        return loginData.email
        } else {
        // Для всех остальных статусов выбрасываем ошибку
        throw new Error(response.statusText)
        }
    } catch (err) {
        const error = err as Error | AxiosError
        
        if (axios.isAxiosError(error)) {
        if (!error.response) {
            return rejectWithValue('Ошибка сети. Проверьте подключение')
        }
        
        switch (error.response.status) {
            case 400:
                // alert('Неверные данные для входа')
            return rejectWithValue('Неверные данные для входа')
            case 401:
                // alert('Неавторизованный доступ')
            return rejectWithValue('Неавторизованный доступ')
            case 404:
                // alert('Пользователь не найден')
            return rejectWithValue('Пользователь не найден')
            default:
                // alert('Сервер временно недоступен')
            return rejectWithValue('Сервер временно недоступен')
        }
        } else {
        return rejectWithValue(error.message || 'Неизвестная ошибка')
        }
    }
    }
)
      
    
    
export const UpdateUser = createAsyncThunk<string, UserAccountData,     {
rejectValue: string
}>

(
'user/update',
async (UserData : UserAccountData, {rejectWithValue }) => {
    try {
    const response = await api.updatePassword.updatePasswordUpdate(UserData)
    if (response.status === 200 || response.status === 201) {
        // Если запрос успешен, но данных нет, возвращаем имя пользователя из запроса
        return 'Данные успешно изменены'
        }
    return rejectWithValue('Неизвестная ошибка')

    
    } catch (err) {
    const error = err as AxiosError

        if (error.response?.status === 401) {
        return rejectWithValue('Неавторизованный доступ')
        }
        if (!error.response) {
        return rejectWithValue('Ошибка сети. Проверьте подключение')
        }
    return rejectWithValue('Сервер временно недоступен')
    }
}
)
    
          
    
interface AppUser {
    email : string
    Is_Auth : boolean
    loading_status : string
    user_errror : boolean
}

const initialState : AppUser =  {
    email : "",
    Is_Auth : false,
    loading_status : "",
    user_errror : false
    
}

export const userSlice = createSlice({
    name : "userSlice",
    initialState,
    reducers: {
        refreshUser : (state) => {
            state.Is_Auth = false,
            state.email = ""
        },
        saveUser : (state, action : PayloadAction<AppUser>) => {
            state.Is_Auth = action.payload.Is_Auth
            state.email = action.payload.email
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.loading_status = "loading"
        
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading_status = 'success'
            state.user_errror = false
            state.Is_Auth = true
            state.email = action.payload!
            console.log(state.email)
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.user_errror = true
            state.loading_status = "failed"
        })
        .addCase(logoutUser.pending, (state) => {
            state.loading_status = "loading"
        
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.loading_status = 'success'
            state.user_errror = false
            state.Is_Auth = false


        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.user_errror = true
            state.loading_status = "success"
            state.Is_Auth = false

        })
        .addCase(UpdateUser.pending, (state) => {
            state.loading_status = "loading"
        
        })
        .addCase(UpdateUser.fulfilled, (state, action) => {
            state.loading_status = 'success'
            state.user_errror = false



        })
        .addCase(UpdateUser.rejected, (state, action) => {
            state.user_errror = true
            state.loading_status = 'faield'


        })
        
        
    }
})

export const {
    saveUser,
    refreshUser
} = userSlice.actions