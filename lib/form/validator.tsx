import {FormValue, FormRule, FormErrors} from './form'
import {isEmpty} from '../helpers/utils'

type FormRules = Array<FormRule>

const getValidResult = (rule: FormRule, value: any): boolean => {
    if (rule.required) {
        return !isEmpty(value)
    }
    if (rule.minLength) {
        return !isEmpty(value) && value.length > rule.minLength
    }
    if (rule.maxLength) {
        return !isEmpty(value) && value.length < rule.maxLength
    }
    if (rule.pattern) {
        return rule.pattern.test(value)
    }
    return true

};

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    let errors: FormErrors = {};
    rules.map(rule => {
        if (!getValidResult(rule, formValue[rule.key])) {
            errors[rule.key] ? errors[rule.key].push(rule.message) : errors[rule.key] = [rule.message]
        }
    });
    return errors
};

export default Validator
