

 const skill = ({ title, url }) => {
  return (
    <div className="flex justify-center flex-col items-center text-3xl gap-2">
        <div>
            {url}
        </div>
        <p>{title}</p>
    </div>
  )
};

export default skill;
