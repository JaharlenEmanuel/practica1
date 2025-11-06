export default function Cards() {
    const team = [
        { nom: "Laura Torres", role: `Diseñadora UX/UI`, image: "/recursos/images/photo1.png" },
        { nom: "Andrés García", role: "Desarrollador Frontend", image: "/recursos/images/photo2.png" },
        { nom: "María López", role: "Project Manager", image: "/recursos/images/photo3.png" },
        { nom: "José Ramírez", role: "QA Tester", image: "/recursos/images/photo4.png" },
        { nom: "Sofía Díaz", role: "Desarrolladora Backend", image: "/recursos/images/photo5.png" },
        { nom: "Carlos Vega", role: "DevOps Engineer", image: "/recursos/images/photo6.png" },
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full pl-8">
            {team.map((member, index) => (
                <div
                    key={index}
                    className="w-5/6 bg-white rounded-2xl  flex flex-col items-center"
                >
                    <div className=" flex items-start w-full">
                        <img
                            src={member.image}
                            alt={member.nom}
                            className="object-contain"
                        />
                        <p className="w-1/6 text-gray-500 text-sm rotate-90 px-4 whitespace-nowrap 
">
                            {member.role}
                        </p>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800">{member.nom}</h2>
                </div>
            ))}
        </div>
    )
}
