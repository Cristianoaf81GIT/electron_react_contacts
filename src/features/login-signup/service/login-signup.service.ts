import { ApiService } from '../../../services/api.service';
import { LoginFormData, SignUpData, User, LoginData } from '../types';
import { store } from '../../../store';
import { AllActions } from '../../../store/actions';

class LoginSignupService {
  
  private apiService: ApiService;
  
  constructor() {
    this.apiService = new ApiService();
  }

  async createNewAccount(signUpData: LoginFormData): Promise<boolean> {
    try {
      const data2Send = this.convertLoginFormDataToSignUpData(signUpData);     
      await this.apiService.post('users', data2Send);     
      return true;                
    } catch(error) {
      console.error(error);     
      return false;
    }
  }

  async login(loginData: LoginFormData): Promise<boolean> {
    try {
      const data2Send = this.convertLoginFormDataToLoginData(loginData);
      const response = await this.apiService.post('auth/user', data2Send);
      console.log(response, 'dados de login');
      store.dispatch(
        AllActions.userLoginAction(
          response.data.access_token,
          response.data.refresh_token,
          response.data.user_name
      ));      
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  private convertLoginFormDataToSignUpData (data: LoginFormData): SignUpData {
    return {
      email: data['login-email'],
      fullName: data['login-fullname'] || '',
      password: data['login-password']
    }
  }

  private convertLoginFormDataToLoginData (data: LoginFormData): LoginData {
    return {
      email: data['login-email'],     
      password: data['login-password']
    }
  }
}

export const loginSignupService = new LoginSignupService();