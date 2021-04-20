import { gql } from '@apollo/client'
// import GET_USER from './queries'

export default gql `
  mutation ($id: ID!, $description: String!) {
    updateUser(input: {
      id: $id
      description: $description
    }) {
      description
    }
  }
`

// export default gql `
//   mutation ($id: ID!, $description: String!) {
//     updateUser(input: {
//       id: $id
//       description: $description
//     }) {
//       description
//       country
//       state
//       street
//       city
//       zip
//     }
//   }
// `


// import * as UpdateUser from './__generated__/UpdateUser'
//
// export const updateUser = () => {
//   const [mutate, {data, error}] = useMutation<
//     UpdateUserTypes.UpdateUser,
//     UpdateUserTypes.UpdateUserVariables
//   >(
//     UPDATE_USER,
//     {
//       update (cache, { data }) {
//         const updatedUserData = data?.updateUser.user
//         const existingUser = cache.readQuery<GetUser>({
//           query: GET_USER,
//           data: {
//             user: [
//               ...existingUser?.user,
//               updatedUserData,
//             ],
//           },
//         });
//       }
//     }
//   )
//   return { mutate, data, error }
// }
