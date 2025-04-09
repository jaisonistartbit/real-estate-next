// "use client"
// import { useQuery, useMutation, gql } from '@apollo/client';
// import client from '@/lib/apolloClient';
// import { useState } from 'react';

// const GET_BOOKS = gql`
//   query GetBooks {
//     books {
//       id
//       title
//       author
       
//     }
//   }
// `;

// const DELETE_BOOKS = gql`
// mutation DeleteBook($id:ID!){
//   deleteBook(id: $id) {
//     id
//     title
//     author
//   }
// }`

// const ADD_BOOK = gql`
//   mutation AddBook($title: String!, $author: String!) {
//     addBook(title: $title, author: $author) {
//       id
//       title
//       author
//     }
//   }
// `;

// export default function Home() {
//   const { loading, error, data, refetch } = useQuery(GET_BOOKS, { client });
//   const [addBook] = useMutation(ADD_BOOK, { client });
//   const [deleteBook] = useMutation(DELETE_BOOKS, { client });
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addBook({ variables: { title, author } });
//     refetch();
//     setTitle('');
//     setAuthor('');
//   };
//   const deletedata = (id) => {
//     deleteBook({ variables: { id } })
//     refetch();

//   }
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error!</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">📚 Book List</h1>
//       <ul className="mt-4 space-y-2">
//         {data.books.map((book) => (
//           <li key={book.id} className="border p-2 rounded">
//             <strong>{book.title}</strong> by {book.author}
//             <button className='ms-5'  >delete</button>
//           </li>
//         ))}
//       </ul>

//       <form onSubmit={handleSubmit} className="mt-6 space-y-2">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="border p-2 w-full"
//         />
//         <input
//           type="text"
//           placeholder="Author"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           className="border p-2 w-full"
//         />
//         <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
//           ➕ Add Book
//         </button>
//       </form>
//     </div>
//   );
// }






































// import { gql, request } from 'graphql-request'; 

// const GET_BOOKS = gql`
//   query GetBooks {
//     books {
//       id
//       title
//       author
       
//     }
//   }
// `;
 

// export default async  function Home() {
//     const data = await request('http://localhost:3001/api/graphql', GET_BOOKS);
 

  
 

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">📚 Book List</h1>
//       <ul className="mt-4 space-y-2">
//       <div>
//       {data?.books?.map((post ) => (
//         <div key={post?.id}>{post?.title}</div>
//       ))}
//     </div>
//       </ul>

   
//     </div>
//   );
// }
