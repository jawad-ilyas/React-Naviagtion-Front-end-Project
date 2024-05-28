import React, { useEffect, useState } from 'react'
import { fetchGithubUsers } from '../../Apis/Github.Api'
import { Link } from 'react-router-dom'
function UserSection() {
    const [github, setGithub] = useState([])
    const getFetchGithubUsers = async () => {
        const response = await fetchGithubUsers()
        setGithub(response)
        // console.log("github response into state  ", response)
    }
    useEffect(() => {
        getFetchGithubUsers()
    }, [])

    return (
        <div className='container-fluid bg-ligthSecondory dark:bg-secondary'>

            <div className='container mx-auto p-10 py-24 '>

                <div className='flex flex-col text-center justify-center items-center text-myBlack dark:text-colorText'>
                    <div>
                        <p>React Navigation is built by Expo, Software Mansion, and Callstack, with contributions from the community and sponsors:

                        </p>
                    </div>
                    <div className='py-4 flex flex-row flex-wrap gap-y-2'>
                        {github.map((user, index) => {
                            return <div key={index}>
                                <Link to={user?.html_url} target='_blank'>
                                    <img className='size-10 rounded mx-2' key={index} src={user?.avatar_url} alt={user.id} />
                                </Link>
                            </div>
                        })}
                    </div>
                    <div>
                        <p>If React Navigation is helpful to you, consider supporting the project by sponsoring it 💜
                        </p>
                    </div></div>
            </div>

        </div>
    )
}

export default UserSection