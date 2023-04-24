import baseApiInstance from '.'

export const registerMember = async (data) => {
  try {
    const response = await baseApiInstance.post('/api/admin/auth/sign-up', data)
    return response.data.data
  } catch (error) {
    console.log('Error: ', error)
    throw new Error('ERROR: api/admin/auth/sign-up')
  }
}
