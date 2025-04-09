"use client";

const AddProperty = ({ isOpen=true, toggle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-6">
        <h2 className="text-lg font-semibold">Add Property</h2>
        <div className="mt-4">
          <p>Your form or content goes here.</p>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={toggle}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
