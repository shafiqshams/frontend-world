interface SearchBarProps {
   value: string;
   onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {

   return (
      <input
         placeholder='Search your post'
         type='text'
         onChange={(e) => onChange(e.target.value)}
         value={value}
      />
   )
}
