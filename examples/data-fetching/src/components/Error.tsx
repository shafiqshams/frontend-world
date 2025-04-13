
interface ErrorProps {
   error: Error;
   refetch: () => void;

}

const Error = ({ error, refetch }: ErrorProps) => {
   return (
      <>
         <p style={{ color: "red" }}>{error.message}</p>
         <button onClick={refetch}>Retry</button>
      </>
   )
}

export default Error;