import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { LoginStyles as styles } from './Login.style'
import ButtonCustom from '../../components/Button/ButtonCustom'
import TextInputCustom from '../../components/TextInput/TextInputCustom'
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();
  const [emailCheck, setEmailCheck] = React.useState(null);
  const [passwordCheck, setPasswordCheck] = React.useState(null);

  const loginHandler = () => {
    console.log(emailCheck, passwordCheck);

    if (!emailCheck && emailCheck != null && !passwordCheck && passwordCheck != null) {
      navigation.reset({
        index: 0,
        routes: [
          { name: 'BottomTabs' as never },
        ],
      }
      );
    } else {
      console.log(12345);
    }
  }

  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.loginTitle} >
        <Text style={styles.loginTitleText} >Chào mừng bạn</Text>
        <Text style={styles.subLoginTitleText} >Đăng nhập để tiếp tục</Text>
      </View>

      {/* Login form */}
      <View style={styles.loginForm} >
        <TextInputCustom props={{
          placeholder: 'Email',
          autoCapitalize: 'none',
          autoCorrect: false,
          keyboardType: 'email-address',
          returnKeyType: 'next',
          type: 'email', // bắt buộc phải có để validate kiểu dữ liệu 
          errorMessage: 'Email không đúng định dạng', // bắt buộc phải có để hiển thị thông báo
        }} label={'Email'}
          state={emailCheck}
          setErrorInput={setEmailCheck} />

        <TextInputCustom props={{
          placeholder: 'Password',
          autoCapitalize: 'none',
          autoCorrect: false,
          returnKeyType: 'done',
          secureTextEntry: true,
          type: 'password', // bắt buộc phải có để validate kiểu dữ liệu 
          errorMessage: 'Mật khẩu sai', // bắt buộc phải có để hiển thị thông báo
        }} label={'Password'}
          state={passwordCheck}
          setErrorInput={setPasswordCheck} />

        <View>
          <Text style={styles.forgotPasswordLabel} >Quên mật khẩu?</Text>

          <ButtonCustom props={{ label: 'Đăng nhập' }} onPress={loginHandler} />
        </View>
      </View>

      {/* Option login form */}
      <View style={styles.optionsLoginForm} >
        <Text style={styles.optionsTitle} >-Hoặc-</Text>

        <TouchableOpacity style={styles.optionsButton} >
          <Image source={require('../../assets/images/googleIcon.png')} style={styles.iconButton} />
          <Text style={styles.labelButton} >Đăng nhập với Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionsButton} >
          <Image source={require('../../assets/images/facebookIcon.png')} style={styles.iconButton} />
          <Text style={styles.labelButton} >Đăng nhập với Facebook</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login