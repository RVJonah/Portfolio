from flask import jsonify

def convert_sqlalchemy_object_to_json(sql_object):
    if sql_object == []:
        return jsonify([])
    new_dict = []
    for row in sql_object:
        current_row_dict = row.__dict__
        current_row_dict.pop('_sa_instance_state')
        current_row_dict.pop('id')
        new_dict.insert(0,current_row_dict)
    return jsonify(new_dict)
