
export default function DataCard({data}){
    
    return (
        <div className="bg-secondary my-5 py-3 px-5 rounded-lg w-5/6 self-center">
            <ul className="my-2 grid-rows-9 grid">
                <li className="grid-rows-span-1 grid grid-cols-2"><div>ID</div>: {data.id}</li>
                <li className="grid-rows-span-1 grid grid-cols-2"><div>Name</div>: {data.name}</li>
                <li className="grid-rows-span-1 grid grid-cols-2"><div>Address</div>: {data.address}</li>
                <li className="grid-rows-span-1 grid grid-cols-2"><div>Country</div>: {data.country}</li>
                <li className="grid-rows-span-1 grid grid-cols-2"><div>Phone Number</div>: {data.phone_number}</li>
                <li className="grid-rows-span-1 grid grid-cols-2"><div>Job Title</div>: {data.job_title}</li>
                <li className="grid-rows-span-1 grid grid-cols-2"><div>Status</div>: {data.status ? "True" : "False"}</li>
                <li className="grid-rows-span-1 grid grid-cols-2"><div>Created at</div>: {data.created_at}</li>
                <li className="grid-rows-span-1 grid grid-cols-2"><div>Updated at</div>: {data.updated_at}</li>
            </ul>
        </div>
    )
}