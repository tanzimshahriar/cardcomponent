import Image from "next/image"
import { User } from "@/types/User"
import Link from "next/link"

const Card = ({ user }: { user: User }) => {
    return (
        <div className="bg-white rounded-md p-4 text-sm font-light pt-16 relative shadow text-center md:text-left flex flex-col justify-between">
            <div>
                <div className="absolute -top-12 flex md:justify-start justify-center w-full">
                    <Image className="rounded-xl shadow-md" alt={user.firstName + ' ' + user.lastName + '\'s image'} src={user.image} width={100} height={100} />
                </div>
                <div>
                    <div className="font-bold text-lg ">{user.firstName + ' ' + user.lastName}</div>
                    <div className="flex gap-1 items-center justify-center md:justify-start">
                        <div>
                            <Image src="/briefcase.png" alt="briefcase icon" width={12} height={9} />
                        </div>
                        <div className="text-gray-500">{user.jobTitle}</div>
                    </div>
                    <div className="py-2 text-xs text-">{user.jobDescription}</div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {user.skills.map((skill) =>
                        <div className="rounded-md bg-gray-100 text-[11px] px-1.5 py-0.5" key={skill}>{skill}</div>
                    )}
                </div>
            </div>
            <Link className=" bg-indigo-600 rounded-md p-2 block text-white text-center mt-4 hover:bg-indigo-500 duration-300 text-xs font-semibold" href={`mailto:${user.email}`}>Email {user.firstName}</Link>
        </div>
    )
}

export default Card
