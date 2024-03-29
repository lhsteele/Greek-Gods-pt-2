import gql from 'graphql-tag';

export default {
  DELETE_GOD: gql`
    mutation DeleteGod($id: ID) {
      deleteGod(id: $id) {
        id
      }
    }
  `,

  NEW_GOD: gql`
    mutation NewGod($name: String, $type: String, $description: String) {
      newGod(name: $name, type: $type, description: $description) {
        id
        name
        description
      }
    }
  `,

  UPDATE_GOD_NAME: gql`
    mutation updateGodName($id: ID, $name: String) {
      updateGod(id: $id, name: $name) {
        id
        name
      }
    }
  `
};

