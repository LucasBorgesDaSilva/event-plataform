import { CheckCircle, Lock , } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

type LessonProps = {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd ' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })

    return (
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className='text-gray-300'>
                {availableDateFormatted}
            </span>

            <div className="mt-2 p-4 border border-gray-500 bg rounded group-hover:border-green-500 transition-colors">
                <header className="flex items-center justify-between mb-5">
                    {isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}
                    
                    <span className="text-xs font-bold border border-green-300 rounded py-[2px] px-2">
                        {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                
                <strong className="text-gray-200 mt-5 block">{props.title}</strong>
            </div>
        </Link>     
    )
}