import { TodoWrapper } from './components/TodoWrapper';
import './assets/scss/app.scss';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row vh-100 align-items-center">
          <div className="col-12 col-lg-8 offset-lg-2">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <TodoWrapper />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
