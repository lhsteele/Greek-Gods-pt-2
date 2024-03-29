import gql from "graphql-tag";

export default {
  FETCH_GODS: gql`
    query FetchGods {
      gods {
        id
        name
        description
      }
    }
  `,

  FETCH_GOD: gql`
    query FetchGod($id: ID!) {
      god(id: $id) {
        id 
        name
        type
        description
        domains
        abode {
          id
          name
        }
        emblems {
          id
          name
        }
        parents {
          id
          name
        }
        children {
          id
          name
        }
        siblings {
          id
          name
        }
      }
    }
  `
  // FETCH_ABODE: gql`
  //   query FetchAbode {
  //     abode($id: ID) {
  //       id
  //       name
  //       coordinates
  //     }
  //   }
  // `,

  // FETCH_ABODES: gql`
  //   query FetchAbodes {
  //     abodes {
  //       id
  //       name
  //     }
  //   }
  // `,

  // FETCH_EMBLEMS: gql`
  //   query FetchEmblems {
  //     id 
  //     name
  //   }
  // `,


  // FETCH_PARENTS: gql`
  //   query FetchParents {
  //     god($id: ID) {
  //       parents {
  //         id
  //         name
  //       }
  //     }
  //   }
  // `,

  // FETCH_SIBLINGS: gql`
  //   query FetchSiblings {
  //     god($id: ID) {
  //       siblings {
  //         id
  //         name
  //       }
  //     }
  //   }
  // `,

  // FETCH_CHILDREN: gql`
  //   query FetchChildren {
  //     god($id: ID) {
  //       children {
  //         id
  //         name
  //       }
  //     }
  //   }
  // `
};

