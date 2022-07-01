import Head from "next/head"
import { useState } from "react";
import { UpdateToken } from "./api/getToken";

export default function Delete() {

    const [ID, setID] = useState(0);
    const [token, setToken] = useState(null)
    UpdateToken(setToken)
    console.log(ID)

    const deleteData = async () => {
        await fetch("https://mitramas-test.herokuapp.com/customers", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                id: ID
            })
        }).then((res) => {
            res.json().then((res2) => {
                console.log(res2)
            }
            ).catch((err) => {
                console.log(err)
            }
            )
        }
        ).catch((err) => {
            console.log(err)
        }
        )
    }

    return (
        
        <div className='h-full w-full flex flex-1'>
        <Head>
          <title>Mitramas Infosys Group</title>
          <meta name="description" content="Manage data" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;800&family=Ramaraja&display=swap" rel="stylesheet"/> 
        </Head>
        <main className='flex flex-1 flex-col justify-center items-center h-full bg-primary'>
            <div className="items-center px-4 flex h-fit w-1/2 self-center" >
                <div className="w-full flex flex-col self-center">
                    <form className="w-full flex flex-row self-center">
                        <input
                            type="text"
                            className="block mr-4 p-2 pl-10 w-70 text-gray-900 bg-gray-50 w-full rounded-lg border border-gray-300 focus:pl-3"
                            placeholder="Masukkan ID yang akan dihapus"
                            onChange={(e) => setID(parseInt(e.target.value))}
                        />
                        <button type="submit" className="bg-red-500 rounded-md p-2" onSubmit={deleteData}>
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </main>
      </div>
    )
    
}