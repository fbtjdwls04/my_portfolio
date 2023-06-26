export default function WorksPage() {
  return (
    <>
      <section className="h-[100vh] bg-gray-500 flex justify-center">
        <div className="h-[100vh] w-[1300px] flex justify-around items-center select-none">
          <div className="card w-96 glass h-[500px]">
            <figure>
              <img src="image/kakao.png" alt="kakao" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">카카오뱅크 모작</h2>
              <p>
                Html + Css + javaScript 를 사용하여 만든 목업 형식의 카카오뱅크
                모작입니다.
                <br />
                transition 과 animation 을 사용하여 동적인 효과를
                구현하였습니다.
              </p>
            </div>
            <a href="https://fbtjdwls04.github.io/2023_kb/kb/" target="_blank">
              <button className="btn h-20 w-full">사이트 바로가기</button>
            </a>
          </div>
          <div className="card w-96 glass h-[500px]">
            <figure>
              <img src="image/todoList.png" alt="todoList" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">todo_List</h2>
              <p>
                React를 사용하여 만든 todo_List 입니다.
                <br />
                게시물 작성, 수정, 삭제, 정렬 기능을 구현하였고 React-persist를
                사용하여 동일한 기기로 다시 접속했을때 데이터가 남아있도록
                하였습니다.
              </p>
            </div>
            <a href="https://fbtjdwls04.github.io/my_note" target="_blank">
              <button className="btn h-20 w-full">사이트 바로가기</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
