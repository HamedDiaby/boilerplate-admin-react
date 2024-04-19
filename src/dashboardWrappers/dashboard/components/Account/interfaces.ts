export interface IAccount {
    onLogout: ()=> void
    onUpdatedPassword: (
        currentPassword: string,
        newPassword: string,
        confirmNewPassword: string
    )=> void
    updatedPasswordSuccessMessage: string
    setUpdatedPasswordSuccessMessage: (e: string)=> void
}
