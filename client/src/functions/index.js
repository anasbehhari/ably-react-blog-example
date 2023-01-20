export const DateFormatter = (date) => {
    const Months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
    return `${Months[new Date(date).getMonth()]} ${new Date(date).getDate()},${new Date(date).getFullYear()}`
  }