import React from 'react';
import classes from './styles/SeparatedBox.module.css';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

/**
 * Composant SeparatedBox pour afficher les options d'une liste déroulante avec un input pour la recherche.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.list - La liste des éléments à afficher dans la boîte.
 * @param {number} props.height - La hauteur de la boîte.
 * @param {string} [props.backgroundColor] - Couleur de fond de la boîte.
 * @param {string} [props.hoveredBackgroundColor] - Couleur de fond lorsqu'un élément est survolé.
 * @param {string} [props.fontColor] - Couleur du texte dans la boîte.
 * @param {string} [props.hoveredFontColor] - Couleur du texte lorsque l'élément est survolé.
 * @param {string} [props.fontFamily] - Police de caractères à utiliser pour le texte.
 * @param {function} props.handleClick - Fonction de rappel appelée lorsque l'utilisateur clique sur un élément.
 * @param {boolean} [props.searchBar] - Indique si une barre de recherche est affichée pour filtrer les options.
 * @returns {JSX.Element} Le composant SeparatedBox rendu.
 */


function SeparatedBox({ list, height, backgroundColor, hoveredBackgroundColor, fontColor, hoveredFontColor, fontFamily, handleClick }) {

    return (
        <div className={classes.dropdown_content}
            style={{ maxHeight: `${height * 7}px`, transform: `translateY(${height + 2}px)`, right: '0' }}>
            <div className={classes.animation_box}
                style={{
                    width: '100%',
                    backgroundColor: backgroundColor
                }}>
                <div className={classes.dropdown_options}
                    style={{
                        maxHeight: `${height * 6}px`,
                        backgroundColor: backgroundColor
                    }}>
                    {list.map((item, index) => {
                        return <ListItem key={item.name ? item.name : index}
                            item={item}
                            index={index}
                            height={height}
                            backgroundColor={backgroundColor}
                            hoveredBackgroundColor={hoveredBackgroundColor}
                            fontColor={fontColor}
                            hoveredFontColor={hoveredFontColor}
                            fontFamily={fontFamily}
                            handleClick={handleClick} />
                    })}
                </div>
            </div>
        </div>
    );
}

SeparatedBox.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                abbreviation: PropTypes.string,
            }),
            PropTypes.number,
            PropTypes.string,
        ])
    ).isRequired,
    height: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string,
    hoveredBackgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
    hoveredFontColor: PropTypes.string,
    fontFamily: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
}

export default SeparatedBox;