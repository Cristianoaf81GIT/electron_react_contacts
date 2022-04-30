import { ApiService } from '../../../services/api.service';
import { LoginFormData, SignUpFormData, User } from '../types';
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
      const { data, status } = await this.apiService.post('users', data2Send);
      console.log(data, status, 'sucesso');
      return true;                
    } catch(error) {
      console.error(error);     
      return false;
    }
  }

  private convertLoginFormDataToSignUpData (data: LoginFormData): SignUpFormData {
    return {
      email: data['login-email'],
      fullName: data['login-fullname'] || '',
      password: data['login-password']
    }
  }
}

export const loginSignupService = new LoginSignupService();