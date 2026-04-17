

const loading = () => {
    return (
        <div className="space-y-8 h-screen flex flex-col items-center justify-center">
            <span className="loading loading-spinner loading-xl"></span>

            <h4 className="text-3xl text-gray-600 text-center">Loading.................</h4>
        </div>
    );
};

export default loading;