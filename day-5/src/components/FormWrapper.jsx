
const FormWrapper = ({ onSubmit, children }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md">
      {children}
    </form>
  </div>
  )
}

export default FormWrapper;