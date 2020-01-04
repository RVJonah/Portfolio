from sqlalchemy import asc
def get_blogs(
    database, table, current_number_of_items, number_of_items_requested):
    total_number_of_items = database.query(table).count()
    number_of_items_remaining = total_number_of_items - current_number_of_items
    item_list = []
    if number_of_items_remaining >= number_of_items_requested:
        item_list = database.query(table).filter(
            table.id>number_of_items_remaining-number_of_items_requested).order_by(
                table.id.asc()).limit(
                    number_of_items_requested).all()
    elif number_of_items_remaining <=0 :
        return item_list
    else:
        item_list = database.query(table).filter(
            table.id <= number_of_items_remaining).order_by(table.id.asc()).all()
    return item_list
