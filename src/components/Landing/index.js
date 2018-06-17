import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import PhoneInput from 'react-phone-number-input';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { parseNumber, formatNumber, isValidNumber } from 'libphonenumber-js'
import 'react-phone-number-input/rrui.css'
import 'react-phone-number-input/style.css'
import { ValidatorForm } from 'react-form-validator-core';
import { submitForm } from "../../firebase/db";
import * as routes from '../../constants/routes';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
     width: "80%", margin: 'auto' ,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  phoneInput: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const englishLevels = [
  {
    value: 'Elementary',
    label: 'Elementary',
  },
  {
    value: 'Pre-Intermediate',
    label: 'Pre-Intermediate',
  },
  {
    value: 'Intermediate',
    label: 'Intermediate',
  },
  {
    value: 'Upper Intermediate',
    label: 'Upper Intermediate',
  },
  {
    value: 'Advanced',
    label: 'Advanced',
  },
];

class LandingPage extends React.Component {
  state = {
    isValid: false,
    name: '',
    surname: '',
    email: '',
    dateOfBirth: '',
    mobileNumber: '',
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    comments: '',
    knowledge: '',
    isOnPresentation: '',
    uni: '',
    facultee: '',
    chair: '',
    yearOfStart: '',
    englishLevel: '',
    workExperince: '',
    reference: '',
    agreement: false,
    isSubmitted: false,
  };

  isFormValid() {
    if (this.state.name && this.state.surname && this.state.email && this.state.dateOfBirth 
        && (this.state.a || this.state.b || this.state.c || this.state.d || this.state.e || this.state.f || this.state.g || this.state.h || this.state.i || this.state.j || this.state.k || this.state.l)
        && this.state.knowledge && this.state.uni && this.state.facultee && this.state.chair
        && this.state.englishLevel && this.state.agreement)
        {
          this.setState({isValid : true});
        }
    else {
      this.setState({isValid : false});
    }
    console.log(this.state)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    }, () => {
      this.isFormValid();
      }
    );
  };

  handleCheckboxChange = name => event => {
    this.setState({
      [name]: event.target.checked,
    }, () => {
      this.isFormValid();
      }
    );
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    submitForm(this.state).then(() => {
      this.setState({isSubmitted: true})
    })
  }

  render() {
    const { classes } = this.props;
    if (!this.state.isSubmitted) 
    return ( 
      <form style={{ display: "flex", justifyContent: "center" }} onSubmit={this.handleSubmit.bind(this)} className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Имя"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          style={{ width: '30%' }}
        />
        <TextField
          id="surname"
          label="Фамилия"
          className={classes.textField}
          value={this.state.surname}
          onChange={this.handleChange('surname')}
          margin="normal"
          style={{ width: '30%' }}
        />
        <TextField
          id="email"
          label="Email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          validators={['required', 'isEmail']}
          margin="normal"
          style={{ width: '100%' }}
        />
        <TextField
          id="date"
          label="Дата рождения"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          value={this.state.dateOfBirth}
          onChange={this.handleChange('dateOfBirth')}
          InputLabelProps={{
            shrink: true,
          }}
          style={{ width: '100%' }}
        />
        
        <PhoneInput
          id="phoneInput"
          className={classes.phoneInput}
          placeholder="Ваш номер телефона"
          value= { this.state.mobileNumber } 
          onChange={ mobileNumber => this.setState({ mobileNumber }) }
        />
        <FormControl component="fieldset" style={{ width: '100%' }}>
          <FormLabel component="legend">Чем Вам было бы интересно заниматься? </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.a}
                  onChange={this.handleCheckboxChange('a')}
                  value="a"
                />
              }
              label="Бизнес-анализ, IT-консалтинг"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.b}
                  onChange={this.handleCheckboxChange('b')}
                  value="b"
                />
              }
              label="Backend-разработка"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.c}
                  onChange={this.handleCheckboxChange('c')}
                  value="c"
                />
              }
              label="Frontend-разработка"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.d}
                  onChange={this.handleCheckboxChange('d')}
                  value="d"
                />
              }
              label="Тестирование, управление качеством"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.e}
                  onChange={this.handleCheckboxChange('e')}
                  value="e"
                />
              }
              label="Создание технической документации"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.f}
                  onChange={this.handleCheckboxChange('f')}
                  value="f"
                />
              }
              label="Внедрение сложного ПО (enterprise)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.g}
                  onChange={this.handleCheckboxChange('g')}
                  value="g"
                />
              }
              label="Участие в финтех-проектах"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.h}
                  onChange={this.handleCheckboxChange('h')}
                  value="h"
                />
              }
              label="Работа с базами данных"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.i}
                  onChange={this.handleCheckboxChange('i')}
                  value="i"
                />
              }
              label="Поддержка клиентов"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.j}
                  onChange={this.handleCheckboxChange('j')}
                  value="j"
                />
              }
              label="Маркетинг в области IT"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.k}
                  onChange={this.handleCheckboxChange('k')}
                  value="k"
                />
              }
              label="Компьютерная безопасность"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.l}
                  onChange={this.handleCheckboxChange('l')}
                  value="l"
                />
              }
              label="Другое (укажите в поле внизу)"
            />
          </FormGroup>
        </FormControl>
        <TextField
          id="comments"
          label="Ваши комментарии"
          multiline
          rowsMax="10"
          value={this.state.comments}
          onChange={this.handleChange('comments')}
          className={classes.textField}
          margin="normal"
          style={{ width: '100%' }}
        />
        <TextField
          id="knowledge"
          label="Расскажите о своих знаниях компьютерных технологий, прикладного ПО, языков программирования:"
          multiline
          rowsMax="10"
          value={this.state.knowledge}
          onChange={this.handleChange('knowledge')}
          className={classes.textField}
          margin="normal"
          style={{ width: '100%' }}
        />
        {/* <FormControl component="fieldset">
          <FormLabel component="legend">Я планирую прийти на день открытых дверей и послушать презентацию Школы </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.isOnPresentation}
                  onChange={this.handleChange('isOnPresentation')}
                  value="Да"
                />
              }
              label="Другое (укажите в поле внизу)"
            />
          </FormGroup>
        </FormControl> */}
        <TextField
          id="uni"
          label="Университет"
          className={classes.textField}
          value={this.state.uni}
          onChange={this.handleChange('uni')}
          margin="normal"
          style={{ width: '100%' }}
        />
        <TextField
          id="facultee"
          label="Факультет"
          className={classes.textField}
          value={this.state.facultee}
          onChange={this.handleChange('facultee')}
          margin="normal"
          style={{ width: '100%' }}
        />
        <TextField
          id="chair"
          label="Кафедра"
          className={classes.textField}
          value={this.state.chair}
          onChange={this.handleChange('chair')}
          margin="normal"
          style={{ width: '100%' }}
        />
        <TextField
          id="chair"
          label="Год поступления"
          className={classes.textField}
          value={this.state.yearOfStart}
          onChange={this.handleChange('yearOfStart')}
          margin="normal"
          style={{ width: '100%' }}
        />
        <TextField
          id="select-englishLevel"
          select
          label="Уровень английского языка"
          className={classes.textField}
          value={this.state.englishLevel}
          onChange={this.handleChange('englishLevel')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Выберите свой уровень владения языком"
          margin="normal"
          style={{ width: '100%' }}
        >
          {englishLevels.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="workExperience"
          label="Опыт работы (если имеется)"
          className={classes.textField}
          value={this.state.workExperince}
          onChange={this.handleChange('workExperince')}
          margin="normal"
          style={{ width: '100%' }}
        />
        <TextField
          id="reference"
          label="Откуда Вы узнали о Летней школе?"
          className={classes.textField}
          value={this.state.reference}
          onChange={this.handleChange('reference')}
          margin="normal"
          style={{ width: '100%' }}
        />
        <FormControlLabel
            control={
              <Checkbox
                checked={this.state.agreement}
                onChange={this.handleCheckboxChange('agreement')}
                value="agreement"
              />
            }
            label="Отправляя эту форму, я соглашаюсь на обработку своих персональных данных, согласно с политике Конфиденциальности OpenWay"
        />
        {this.state.isValid? 
        <Button variant="contained" color="primary" className={classes.button}
          type="submit">
            Отправить
        </Button>:
        <Button variant="contained" color="primary" disabled className={classes.button}
          type="submit">
            Отправить
        </Button>}
        
      </form>
    );
    else {
      console.log(this.state)
      return (<div>Форма отправлена!</div>)
    }
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
