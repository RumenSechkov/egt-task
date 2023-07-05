const alphabetic = /^[a-zA-Z ._\-]+$/
const alphanumeric = /^[a-zA-Z0-9 ().,_\-]+$/
const numeric = /^(\+){0,1}[0-9]+$/
const email =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const website =
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
const latlng =
  /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/

export const validateString = (
  value: string,
  type = 'username',
  required = false,
) => {
  if (!value) {
    if (required) {
      return 'Field is required'
    }
    return
  }
  switch (type) {
    case 'username':
      if (!value.match(alphabetic)) {
        return 'Must contain only letters'
      }
      break
    case 'email':
      if (!value.match(email)) {
        return 'Must be valid email'
      }

      break
    case 'website':
      if (!value.match(website)) {
        return 'Must be valid URL'
      }
      break
    case 'phone':
    case 'companyName':
    case 'companyPhrase':
    case 'street':
    case 'suite':
    case 'city':
    case 'zipcode':
      if (!value.match(alphanumeric)) {
        return 'Must contain only letters and numbers'
      }
      break
    case 'lat':
    case 'lng':
      if (!value.match(latlng)) {
        return 'Must be valid coordinates'
      }
      break
    default:
      break
  }
}
