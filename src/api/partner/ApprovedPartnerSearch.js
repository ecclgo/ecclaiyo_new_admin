import baseApiInstance from './PartnerIndex'

export const ApprovedPartnerSearch = async () => {
  try {
    const response = await baseApiInstance.get('/api/admin/approved-partners')
    return response.data.data
  } catch (error) {
    console.log('ERROR: ', error)
    throw new Error('ERROR: /api/admin/approved-partners')
  }
}
