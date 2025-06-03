import { useEffect,useState } from "react";

type ProgramType = {
  id: string; 
  title: string;
  poster: string;
  country: string;
  year: number;
  synopsis: string;
};

function Programs(){
const [programs, setPrograms] = useState<ProgramType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
    .then((res) => res.json())
    .then((data : ProgramType[]) => {setPrograms(data)})
    .catch((err) => {console.error("Erreur de fetch :", err);
      
     
      
    });
  }, []);


    return ( 
    <>
   {programs.map((program) =>
    <section className="mb-10" key={program.id}>
    <h3 className="text-5xl mb-6">{program.title}</h3>
    <img className="w-50" src={program.poster} alt={program.title} />
    <div className="flex gap-2 text-2xl font-bold my-2">
    <p>{program.country}</p>
    <p>{program.year}</p>
    </div>
    <h4>{program.synopsis}</h4>
    
    </section>
    )} 
    </> 
    );
}

export default Programs;