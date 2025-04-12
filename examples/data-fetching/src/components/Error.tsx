
interface ErrorProps {
   error: Error
}

const Error = ({ error }: ErrorProps) => {
   return (
      <>
         <p style={{ color: "red" }}>{error.message}</p>
      </>
   )
}

export default Error;