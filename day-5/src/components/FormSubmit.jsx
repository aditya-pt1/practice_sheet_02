
const FormSubmit = ({ label }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
    >
      {label}
    </button>
  );
};

export default FormSubmit;
