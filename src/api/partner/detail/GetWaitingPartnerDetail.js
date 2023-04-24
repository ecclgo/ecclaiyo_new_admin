import baseApiInstance from './PartnerDetailIndex'

export const GetWaitingPartnerDetail = async (data) => {
  try {
    const response = await baseApiInstance.get(
      `/api/admin/waiting-partner/get-one/${data}`,
    )
    return response.data.data
  } catch (error) {
    console.log('ERROR : ', error)
    throw new Error('/api/admin/waiting-partner/get-one/')
  }
}
