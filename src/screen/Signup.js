import { useForm } from 'react-hook-form'
import AuthLayout from '../components/auth/AuthLayout'
import FormBox from '../components/auth/FormBox'
import TextDeco from '../components/auth/TextDeco'
import Input from '../components/auth/Input'
import Button from '../components/auth/Button'
import truck_2 from '../components/img/truck_2.png'
import SignUpBox from '../components/auth/SignUpBox'
import routes from './Routes'
import PageTitle from '../components/PageTitle'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom'
import { registerMember } from '../api/Registeration'

function Signup() {
  const history = useHistory()
  const location = useLocation()
  const { register, handleSubmit, formState, getValues } = useForm({
    mode: 'onChange',
    defaultValues: {
      Id: location?.state?.Id || '',
      Password: location?.state?.Password || '',
    },
  })

  let result = []
  const onSubmit = async (data) => {
    const { adminId, password } = getValues()
    history.push(routes.home)
    result = await registerMember(data)
  }

  return (
    <AuthLayout>
      <PageTitle title="Signup" />
      <FormBox>
        <TextDeco>관리자 계정등록</TextDeco>
        <div>
          <img src={truck_2} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('adminId', { required: 'adminId is required' })}
            name="adminId"
            type="text"
            placeholder="Id를 입력해주세요."
          />
          <Input
            {...register('password', { required: 'password is required.' })}
            name="password"
            type="password"
            placeholder="Password를 입력해주세요."
          />
          <Button type="submit" value="등록"></Button>
        </form>
        <SignUpBox linkText="로그인" link={routes.home} />
      </FormBox>
    </AuthLayout>
  )
}

export default Signup
