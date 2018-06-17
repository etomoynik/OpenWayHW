import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    display: "flex",
    justifyContent: "spaceAround",
    flexWrap: "wrap",
    width: "300px",
  };

const interests = {
      a:"Бизнес-анализ, IT-консалтинг",
      b:"Backend-разработка",
      c:"Frontend-разработка",
      d:"Тестирование, управление качеством",
      e:"Создание технической документации",
      f:"Внедрение сложного ПО (enterprise)",
      g:"Участие в финтех-проектах",
      h:"Работа с базами данных",
      i:"Поддержка клиентов",
      j:"Маркетинг в области IT",
      k:"Компьютерная безопасность",
      l:"Другое (укажите в поле внизу)",
  }
  
  class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    showinterests(){
        let interest = [];
        for(var elem in interests){
            if (this.props.profile[elem]) {
                interest.push(interests[elem])
            }
        }
        return interest
    }

    render() {
        const classes = this.props.classes;
        const profile = this.props.profile;
        console.log(profile)
        return (
            <div>
                <Card >
                    <CardContent>
                        <pr> Имя: {profile.name} </pr>

                        <pr> Фамилия: {profile.surname}
                        </pr>
                        <div>
                            Email: {profile.email}
                        </div>
                        <div>
                            Дата рождения: {profile.dateOfBirth}
                        </div>
                        <div>
                            Мобильный телефон: {profile.mobileNumber}
                        </div>
                        <div>
                            Интересы: {this.showinterests().map(val => {
                                return (<pr>
                                    {val}, 
                                </pr>)
                            })}
                        </div>
                        <div>
                            Комментарии: {profile.comments}
                        </div>
                        <div>
                            Знания компьютерных технологий: {profile.knowledge}
                        </div>
                        <div>
                            Присутствие на презентации Школы: {profile.isOnPresentation? "Да": "Нет"}
                        </div>
                        <div>
                            Университет: {profile.uni}
                        </div>
                        <div>
                            Факультет: {profile.facultee}
                        </div>
                        <div>
                            Кафедра: {profile.chair}
                        </div>
                        <div>
                            Год поступления: {profile.yearOfStart}
                        </div>
                        <div>
                            Уровень английского языка: {profile.englishLevel}
                        </div>
                        <div>
                            Опыт работы: {profile.workExperince}
                        </div>
                        <div>
                            Откуда узнали: {profile.reference}
                        </div>

                    </CardContent>
                </Card>
            </div>
        )
    }
    
};
  
  Profile.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Profile);
  