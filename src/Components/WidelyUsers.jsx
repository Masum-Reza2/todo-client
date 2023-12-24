const useFulUsers = [
    { name: 'Student' },
    { name: 'Developer' },
    { name: 'Shop-Keeper' },
    { name: 'House-Wife' },
    { name: 'Teacher' },
    { name: 'Banker' },
]

const WidelyUsers = () => {
    return (
        <div className="py-3 space-y-3">
            <h1 className="text-center font-bold md:text-xl text-gray-500">Widely useful for those users.</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 px-2">
                {
                    useFulUsers?.map((item, index) => <div key={index} className="p-5 border shadow rounded-lg transition-all hover:bg-pink-50 cursor-pointer">
                        <p className='text-blue-600 font-bold'>{item?.name}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default WidelyUsers