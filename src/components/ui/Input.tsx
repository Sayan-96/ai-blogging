const Input = ({ value, onChange, placeholder }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string }) => {
    return (
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border p-2 rounded"
      />
    );
  };
  
  export default Input;
  