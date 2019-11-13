import React from "react";
import DirectoryComponent from "../../components/directory/directory.component";
import './homepage.styles.scss';

const HomePage: React.FC<{ history: any }> = ({ history }) => (
    <div className='homepage'>
        <DirectoryComponent/>
    </div>
);

export default HomePage;
