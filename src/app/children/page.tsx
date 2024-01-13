import React from "react";
import Image from "next/image";

type ChildProps = {
  name: string;
  url: string;
};

const Child = ({ name, url }: ChildProps) => {
  return (
    <div className="w-[200px] h-[200px] p-3 flex flex-col items-center justify-between bg-slate-300 rounded-2xl">
      <div className="overflow-hidden flex justify-center items-center  rounded-xl max-h-[80%] shadow-md">
        <Image
          className="w-full"
          src={url}
          alt={name}
          width={200}
          height={200}
        />
      </div>
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default function Page() {
  return (
    <div className="w-full h-fit max-h-full flex gap-y-4 flex-wrap gap-4 overflow-y-auto">
      <Child
        name="Azorel"
        url="https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZWRpZ2lhbmltYWx3b3JsZC5y/Y3MtcmRzLnJvJTJGc3RvcmFnZSUyRjIw/MTglMkYwNyUyRjA2JTJGOTM0OTczXzkz/NDk3M19DYXRlbC12ZXNlbC5qcGcmdz03/ODAmaD02MDAmemM9MSZoYXNoPTNiYTY3/ZTBiNTQ5YTU0YjRkN2YyYTZjZTE4MzUwZDI0.thumb.jpg"
      />
      <Child
        name="Pufi"
        url="https://scontent.fclj2-1.fna.fbcdn.net/v/t39.30808-6/295880501_380073580928011_5205244549655105000_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=yE3bEmEYYw0AX8GKmpW&_nc_ht=scontent.fclj2-1.fna&oh=00_AfBS4VW-QN2wqnntOrzTBzMZ1Zl_sBGeSapYNe6sPsImUQ&oe=65A84649"
      />
      <Child
        name="Azorel"
        url="https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZWRpZ2lhbmltYWx3b3JsZC5y/Y3MtcmRzLnJvJTJGc3RvcmFnZSUyRjIw/MTglMkYwNyUyRjA2JTJGOTM0OTczXzkz/NDk3M19DYXRlbC12ZXNlbC5qcGcmdz03/ODAmaD02MDAmemM9MSZoYXNoPTNiYTY3/ZTBiNTQ5YTU0YjRkN2YyYTZjZTE4MzUwZDI0.thumb.jpg"
      />
      <Child
        name="Pufi"
        url="https://scontent.fclj2-1.fna.fbcdn.net/v/t39.30808-6/295880501_380073580928011_5205244549655105000_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=yE3bEmEYYw0AX8GKmpW&_nc_ht=scontent.fclj2-1.fna&oh=00_AfBS4VW-QN2wqnntOrzTBzMZ1Zl_sBGeSapYNe6sPsImUQ&oe=65A84649"
      />
      <Child
        name="Azorel"
        url="https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZWRpZ2lhbmltYWx3b3JsZC5y/Y3MtcmRzLnJvJTJGc3RvcmFnZSUyRjIw/MTglMkYwNyUyRjA2JTJGOTM0OTczXzkz/NDk3M19DYXRlbC12ZXNlbC5qcGcmdz03/ODAmaD02MDAmemM9MSZoYXNoPTNiYTY3/ZTBiNTQ5YTU0YjRkN2YyYTZjZTE4MzUwZDI0.thumb.jpg"
      />

      <div className="w-[200px] h-[200px] flex justify-center items-center">
        <button className="w-[100px] h-[100px] p-3 flex items-center text-9xl justify-center bg-slate-300 rounded-2xl">
          <div className="-translate-y-[12.5px] font-light select-none">+</div>
        </button>
      </div>
    </div>
  );
}
