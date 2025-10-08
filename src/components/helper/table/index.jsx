
export default function Table({theadBg, tbodyBg, th, td,className="",tbodyClass="", onlyClass=false}){
  return (
    <table className={'border-seperate w-full'}>
    
        <thead style={{background:theadBg||'white'}}>
            <tr>
                {th}
            </tr>
        </thead>
        <tbody className=""
          style={{background:tbodyBg || 'white'}}>
            {td}
        </tbody>
    </table>
  );
};

