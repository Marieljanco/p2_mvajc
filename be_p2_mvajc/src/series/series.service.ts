import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-serie.dto';
import { UpdateSeriesDto } from './dto/update-serie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Serie } from './entities/serie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Serie) private seriesRepository: Repository<Serie>,
  ) {}

  async create(createSeriesDto: CreateSeriesDto): Promise<Serie> {
    const existe = await this.seriesRepository.findOneBy({
      titulo: createSeriesDto.titulo.trim(),
      
      sinopsis: createSeriesDto.sinopsis.trim(),
      director: createSeriesDto.director.trim(),
      temporadas: createSeriesDto.temporadas,
      fecha_estreno: createSeriesDto.fecha_estreno,
    });

    if (existe) {
      throw new ConflictException('El serie ya existe');
    }

    return this.seriesRepository.save({
      titulo: createSeriesDto.titulo.trim(),
      sinopsis: createSeriesDto.sinopsis.trim(),
      director: createSeriesDto.director.trim(),
      temporadas:createSeriesDto.temporadas,
    });
  }

  async findAll(): Promise<Serie[]> {
    return this.seriesRepository.find();
  }

  async findAllByGenero(idGenero: number): Promise<Serie[]> {
    return this.seriesRepository
      .createQueryBuilder('series')
      // .innerJoin('series.albumes', 'albumes')
      // .innerJoin('albumes.canciones', 'canciones')
      // .innerJoin('canciones.genero', 'genero')
      // .where('genero.id = :idGenero', { idGenero })
      .getMany();
  }

  async findOne(id: number): Promise<Serie> {
    const serie = await this.seriesRepository.findOneBy({ id });
    if (!serie) {
      throw new NotFoundException(`El serie ${id} no existe`);
    }
    return serie;
  }

  async update(id: number, updateSeriesDto: UpdateSeriesDto): Promise<Serie> {
    const serie = await this.findOne(id);
    const serieUpdate = Object.assign(serie, updateSeriesDto);
    return this.seriesRepository.save(serieUpdate);
  }

  async remove(id: number) {
    const serie = await this.findOne(id);
    return this.seriesRepository.delete(serie.id);
  }
}
